import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { LinearProgress, Stack } from "@mui/material";

import classNames from "classnames";
import { useDebouncedCallback } from "use-debounce";

import {
    GridPaginableContainer,
    GridPaginableTable,
    GridPaginableTableBody,
    GridPaginableTableCell,
    GridPaginableTableCellHead,
    GridPaginableTableHead,
    GridPaginableTableRow,
    GridPaginableTableRowHead,
    GridPaginableTableSortLabelContainer,
    GridPaginableTableSortLabelIcons,
} from "./styled";
import { TStitchesCurrentConfig } from "@/shared/theme/stitchesConfig";
import { Pagination, Text } from "..";
import { useMediaQueryCurrent } from "@/shared/hooks";

export type TGridPaginableOrder = "asc" | "desc" | "none";

export type TGridPaginableColumnBase = {
    id: string;
    name: string;
    label?: string;
    numeric?: boolean;
    disableSorting?: boolean;
    order?: number;
    render?: (
        row: any,
        currentBreakpoints?: ReturnType<typeof useMediaQueryCurrent>
    ) => React.ReactNode | string;
    width?: string | number;
    widthFitContent?: boolean;
    hideOnBreakpoint?: keyof TStitchesCurrentConfig["media"];
    hideOnMediaWidth?: [">" | "<", number];
    system?: boolean;
};

export interface IGridPaginableProps
    extends React.ComponentProps<typeof GridPaginableContainer> {
    paginable?: "reloading" | "switching" | false;
    sort?: Omit<IGridPaginableHeadProps, "columns">;
    columns?: Readonly<TGridPaginableColumnBase[]>;
    rows?: Array<Record<string, any>>;
    isLoading?: boolean;
    noMoreItems?: boolean;
    onRowSelect?: (...args: any[]) => void;
    pageCount?: number;
    selectedPage?: number;
    setSelectedPage?: (val: number) => void;
}

const GridPaginable: React.FC<IGridPaginableProps> = ({
    columns = [],
    rows = [],
    paginable = "switching",
    sort,
    isLoading,
    noMoreItems,
    onRowSelect,
    setSelectedPage,
    pageCount,
    selectedPage,
    ...props
}) => {
    const currentBreakpoints = useMediaQueryCurrent();

    const onRowSelectTmp = useCallback(
        (...args: any[]) => {
            if (onRowSelect) {
                onRowSelect(...args);
            }
        },
        [onRowSelect]
    );

    // @todo обобщить в хук для всех paginable-списков, включая grid
    const columnsPrepared = useMemo(() => {
        const cols: TGridPaginableColumnBase[] = [];

        // @todo вынести в helper
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            const existsIdx = cols.findIndex((x) => x.id === col.id);

            if (existsIdx > -1) {
                cols.splice(existsIdx, 1);
            }

            cols.push(col);
        }

        return cols
            .filter((x) => !x.system)
            .filter((x) => !x.id.startsWith("_"))
            .filter((x) =>
                x.hideOnBreakpoint
                    ? !currentBreakpoints.includes(x.hideOnBreakpoint)
                    : true
            )
            .sort((a, b) => Number(a.order) - Number(b.order));
    }, [columns, currentBreakpoints]);

    const handlePageClick = ({ selected }: { selected: number }) => {
        if (setSelectedPage) setSelectedPage(selected);
    };

    return (
        <GridPaginableContainer
            {...props}
            className={classNames("zamio-uikit-gridpaginable", props.className)}
        >
            <GridPaginableTable>
                {isLoading ? (
                    <tbody>
                        <tr>
                            <td colSpan={columnsPrepared.length}>
                                <LinearProgress />
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <>
                        <GridPaginableHead
                            {...sort}
                            columns={columnsPrepared}
                            percentageWidth={isLoading}
                        />
                        <GridPaginableTableBody>
                            {rows.length ? (
                                rows.map((row) => (
                                    <GridPaginableTableRow
                                        tabIndex={-1}
                                        key={row.name}
                                        onClick={() => onRowSelectTmp(row)}
                                    >
                                        {columnsPrepared.map((col) => {
                                            let cellBody:
                                                | React.ReactNode
                                                | string = row[col.id];

                                            if (col.render) {
                                                cellBody = col.render(
                                                    {
                                                        ...row,
                                                        onRowSelect:
                                                            onRowSelectTmp,
                                                    },
                                                    currentBreakpoints
                                                );
                                            }

                                            return (
                                                <GridPaginableTableCell
                                                    scope="row"
                                                    padding="none"
                                                    key={`${row.name}_${col.id}`}
                                                >
                                                    {cellBody}
                                                </GridPaginableTableCell>
                                            );
                                        })}
                                    </GridPaginableTableRow>
                                ))
                            ) : (
                                <GridPaginableTableRow>
                                    <GridPaginableTableCell
                                        colSpan={columnsPrepared.length}
                                        scope="row"
                                        padding="none"
                                        css={{
                                            "&.MuiTableCell-root": {
                                                border: "none",
                                                textAlign: "center",
                                            },
                                        }}
                                    >
                                        <Text
                                            variant="heading1"
                                            color="gray1"
                                            as="div"
                                        >
                                            Empty data
                                        </Text>
                                    </GridPaginableTableCell>
                                </GridPaginableTableRow>
                            )}
                        </GridPaginableTableBody>
                    </>
                )}
            </GridPaginableTable>

            {pageCount && (
                <Stack
                    justifyContent={"center"}
                    width={"100%"}
                    flexDirection={"row"}
                >
                    <Pagination
                        selectedPage={selectedPage}
                        handlePageChange={handlePageClick}
                        pageCount={pageCount || 0}
                    />
                </Stack>
            )}
        </GridPaginableContainer>
    );
};

export default GridPaginable;

interface IGridPaginableHeadProps
    extends React.ComponentProps<typeof GridPaginableTableHead> {
    onSort?: (property: string) => void;
    orderByCols?: {
        [col: string]: TGridPaginableOrder;
    };
    columns?: Readonly<TGridPaginableColumnBase[]>;
    percentageWidth?: boolean;
}

const GridPaginableHead = ({
    columns = [],
    orderByCols,
    onSort,
    percentageWidth,
    ...props
}: IGridPaginableHeadProps) => {
    const rowRef = useRef<HTMLTableRowElement>(null);
    const [colsSizes, setColsSizes] = useState<number[]>([]);

    const createSortHandler = useCallback(
        (property: string) => {
            if (onSort) {
                onSort(property);
            }
        },
        [onSort]
    );

    const handleOnWinResize = useDebouncedCallback(() => {
        if (!rowRef.current) {
            return;
        }

        const rowEl = rowRef.current;
        const rowCells = rowEl.querySelectorAll("th");
        const rowElWidth = rowEl.getBoundingClientRect().width;
        const rowCellsWidth = Array.from(rowCells).map(
            (x) => (x.getBoundingClientRect().width / rowElWidth) * 100
        );

        setColsSizes(rowCellsWidth);
    }, 500);

    useEffect(() => {
        handleOnWinResize();
        window.addEventListener("resize", handleOnWinResize);

        return () => window.removeEventListener("resize", handleOnWinResize);
    }, [percentageWidth]);

    return (
        <GridPaginableTableHead {...props}>
            <GridPaginableTableRowHead ref={rowRef}>
                {columns.map((col, idx) => (
                    <GridPaginableTableCellHead
                        key={col.id}
                        align={col.numeric ? "right" : "left"}
                        padding="none"
                        css={{
                            // width: percentageWidth
                            //     ? `${colsSizes[idx]}%`
                            //     : col.widthFitContent
                            //     ? "calc(0px)"
                            //     : col.width || "initial",
                            width: col.width,
                        }}
                    >
                        <GridPaginableTableSortLabel
                            active
                            enabled={!col.disableSorting}
                            direction={
                                orderByCols ? orderByCols[col.id] : "none"
                            }
                            onClick={() => createSortHandler(col.id)}
                        >
                            {col.label}
                        </GridPaginableTableSortLabel>
                    </GridPaginableTableCellHead>
                ))}
            </GridPaginableTableRowHead>
        </GridPaginableTableHead>
    );
};

interface IGridPaginableTableSortLabelProps
    extends React.ComponentProps<typeof GridPaginableTableSortLabelContainer> {
    active?: boolean;
    direction?: "desc" | "asc" | "none";
    onClick?: () => void;
    enabled?: boolean;
}

const GridPaginableTableSortLabel: React.FC<
    React.PropsWithChildren<IGridPaginableTableSortLabelProps>
> = ({ children, direction, enabled = true, onClick, ...props }) => (
    <GridPaginableTableSortLabelContainer
        {...props}
        onClick={onClick}
        clickable={enabled}
    >
        {children}
        {enabled && (
            <></>
            // <GridPaginableTableSortLabelIcons direction={direction}>
            //     {/* <TriangleUpIcon className="dir-asc" />
            //     <TriangleDownIcon className="dir-desc" /> */}
            // </GridPaginableTableSortLabelIcons>
        )}
    </GridPaginableTableSortLabelContainer>
);
