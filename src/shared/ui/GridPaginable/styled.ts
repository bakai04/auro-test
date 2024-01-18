import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { styled } from "@/shared/theme/stitchesConfig";

export const GridPaginableContainer = styled(TableContainer, {
    "&.MuiTableContainer-root": {
        position: "relative",
        border: "$grayAccentLight 1px solid",
        width: "auto",
        overflow: "auto",
        userSelect: "none",
        borderRadius: "8px 8px 0px 0px",
    },

    "& .MuiLinearProgress-root": {
        margin: "20px 40px",
    },
});

export const GridPaginableTable = styled(Table, {
    "&.MuiTable-root": {
        overflowY: "scroll",
        borderCollapse: "collapse",
        border: "none",
        tableLayout: "auto",
        width: "100%",
    },
});

export const GridPaginableTableCellHead = styled(TableCell, {
    "&.MuiTableCell-root": {
        fontFamily: "inherit",
        verticalAlign: "middle",
        fontSize: "$s10",
        color: "$whiteBase",
        fontWeight: "medium",
        borderBottom: "$grayAccentLight 1px solid",
        padding: "14px 10px",
        backgroundColor: "transparent",
        transition: "background-color 100ms ease",
    },
});

export const GridPaginableTableCell = styled(TableCell, {
    "&.MuiTableCell-root": {
        fontFamily: "inherit",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "$s10",
        color: "$whiteBase",
        fontWeight: "500",
        borderBottom: "$grayAccentLight 1px solid",
        padding: "23px 10px",
        backgroundColor: "transparent",
        transition: "background-color 100ms ease",
    },
});

export const GridPaginableTableRowHead = styled(TableRow, {
    "&.MuiTableRow-root": {
        [`${GridPaginableTableCell}`]: {
            "&.MuiTableCell-root:first-child": {
                paddingLeft: 30,
            },
            "&.MuiTableCell-root:last-child": {
                paddingRight: 30,
            },
        },
    },
});

export const GridPaginableTableRow = styled(TableRow, {
    "&.MuiTableRow-root": {
        borderBottom: "1px solid $gray3",

        [`${GridPaginableTableCell}`]: {
            "&.MuiTableCell-root:first-child": {
                paddingLeft: 30,
            },
            "&.MuiTableCell-root:last-child": {
                paddingRight: 30,
            },
        },
    },
});

export const GridPaginableTableSortLabelContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    lineHeight: 1,
    color: "$gray6",
    fontWeight: "$medium",
    fontSize: "$s10",
    pointerEvents: "none",

    variants: {
        clickable: {
            true: {
                cursor: "pointer",
                pointerEvents: "auto",
            },
        },
    },
});

export const GridPaginableTableSortLabelIcons = styled("div", {
    position: "relative",
    width: 8,
    height: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
        width: 15,
        height: 15,
        position: "absolute",
    },

    "& .dir-asc": {
        top: -7,
    },
    "& .dir-desc": {
        bottom: -7,
    },

    variants: {
        direction: {
            asc: {
                "& .dir-asc": {
                    color: "$blueBase",
                },
            },
            desc: {
                "& .dir-desc": {
                    color: "$blueBase",
                },
            },
            none: {},
        },
    },
});

export const GridPaginableTableHead = styled(TableHead, {
    background: "$primaryBlack",
    borderRadius: "8px",
    overflow: "hidden",

    [`${GridPaginableTableRow}`]: {
        "&.MuiTableRow-root": {
            "& .MuiTableCell-root": {
                py: 0,
            },
        },
    },

    [`${GridPaginableTableCell}`]: {
        whiteSpace: "nowrap",

        height: 45,
    },
});

export const GridPaginableTableBody = styled(TableBody, {
    [`${GridPaginableTableRow}`]: {
        "&.MuiTableRow-root": {
            height: 73,
            background: "$gray4",
        },
    },
});
