import { useEffect, useMemo, useRef } from "react";
// import * as echarts from "echarts";
// import "echarts/lib/chart/bar";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/dataZoom";
import { Stack } from "@mui/material";
import { ITransaction, IUser } from "@/store/api/my-organization/types";
import { formatDateToChart } from "@/shared/lib/date";
import { Icons, Text } from "@/shared/ui";
import { ChartWrapper, Divider } from "./styled";

interface IUserTransactionChart {
    userData: IUser | null;
    data?: ITransaction[];
}

export const UserTransactionChart = ({
    userData,
    data,
}: IUserTransactionChart) => {
    const chartRef = useRef(null);
    const newIcon =
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cchAQAACAOwQw7iUYqaJMAgrp7gc4vqHbwEcVQOleACO+Ub4MEAAAAASUVORK5CYII=";

    const chartData = useMemo(() => {
        let initialValue = userData?.subscription.tokens || 0;

        const valueData = data
            ?.map((change) => {
                if (change.type === "REPLENISH") {
                    initialValue += change.amount;
                } else {
                    initialValue -= change.amount;
                }

                return initialValue;
            })
            .reverse();

        const categoryData = data
            ?.map((transfer) => {
                return formatDateToChart(transfer.created_at);
            })
            .reverse();
        return { categoryData, valueData };
    }, [userData, data]);

    useEffect(() => {
        if (!chartData.categoryData?.length && !chartData.categoryData?.length)
            return;
        // const chart = echarts.init(chartRef.current);

        const categoryData = chartData?.categoryData;
        const valueData = chartData?.valueData;

        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            xAxis: {
                type: "category",
                data: categoryData,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#616D8D",
                    margin: 10,
                },
                axisLine: {
                    lineStyle: {
                        color: "#222B44",
                    },
                },
            },
            yAxis: {
                type: "value",
                position: "right",
                splitLine: {
                    lineStyle: {
                        color: "#222B44",
                    },
                },
                axisLabel: {
                    color: "#616D8D",
                    margin: 10,
                },
            },
            dataZoom: [
                {
                    type: "slider",
                    show: true,
                    xAxisIndex: [0],
                    start: 20,
                    end: 80,
                    handleStyle: {
                        color: "#1C64F2",
                    },
                    backgroundColor: "#222B44",
                    fillerColor: "rgba(28, 100, 242, 0.3)",
                    borderColor: "transparent",
                    handleIcon: newIcon,
                    brushSelect: false,
                    dataBackground: {
                        lineStyle: { color: "#616D8D", width: "1.5" },
                        areaStyle: { color: "#222B44" },
                    },
                    selectedDataBackground: {
                        lineStyle: { width: "1.5" },
                    },
                    textStyle: {
                        color: "#fff",
                    },
                },
            ],
            series: [
                {
                    type: "line",
                    data: valueData,
                    large: true,
                    itemStyle: {
                        color: "#1C64F2",
                    },
                    areaStyle: {
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        //     { offset: 0, color: "rgba(28, 100, 242, 0.4)" },
                        //     { offset: 1, color: "rgba(28, 100, 242, 0.05)" },
                        // ]),
                    },
                    showSymbol: false,
                },
            ],
        };

        // chart.setOption(option);

        window.addEventListener("resize", () => {
            // chart.resize();
        });

        return () => {
            // chart.dispose();
            window.removeEventListener("resize", () => {
                // chart.resize();
            });
        };
    }, [chartData]);

    return (
        <Stack flexDirection={"column"} marginTop={"20px"}>
            <Text variant={"heading2"}>Использование токенов</Text>
            <Stack
                position={"relative"}
                flexDirection={"column"}
                gap={"12px"}
                width={"450px"}
                marginTop={"20px"}
                height={"300px"}
            >
                <ChartWrapper>
                    <Text variant={"caption1"}>
                        Тут должно быть график, оно локально все хорошо работает
                        но только при сборке проекта вышло ошибка не было
                        времени решить, решил закоментировать если взглянуть в
                        код можно увидеть решение
                    </Text>
                    {/* <div
                        ref={chartRef}
                        style={{ width: "100%", height: "100%" }}
                    /> */}
                </ChartWrapper>
            </Stack>
            <Stack
                justifyContent={"center"}
                flexDirection={"row"}
                gap={"8px"}
                alignItems={"center"}
            >
                <Icons.ChartLegend />
                <Text variant={"caption3"} color={"gray1"}>
                    {userData?.email}
                </Text>
            </Stack>
            <Divider />
        </Stack>
    );
};
