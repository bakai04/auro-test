import { useLayoutEffect, useState } from "react";
import {
    TStitchesCurrentConfig,
    TStitchesMediaKeys,
    config,
} from "../theme/stitchesConfig";

export interface IUseMediaQueryCurrentHookArgs {
    ignoreWidth?: number;
}

export const useMediaQueryCurrent = () => {
    const mediaQueries = config["media"];
    const [queries, setQueries] = useState<TStitchesMediaKeys[]>([]);

    const getMatches = (): TStitchesMediaKeys[] => {
        const queries = Object.entries(mediaQueries);

        if (typeof window !== "undefined") {
            return queries
                .filter(([, query]) => window.matchMedia(query).matches)
                .map(([name]) => name) as TStitchesMediaKeys[];
        }

        return [];
    };

    function handleChange() {
        const matches = getMatches();

        if (JSON.stringify(matches) !== JSON.stringify(queries)) {
            setQueries(matches);
        }
    }

    useLayoutEffect(() => {
        handleChange();
        window.addEventListener("resize", handleChange);

        return () => {
            window.removeEventListener("resize", handleChange);
        };
    }, [queries]);

    return queries;
};

export interface TUseMediqQueryHookProps {
    query?: string;
    specificQuery?: [">" | "<", number] | null;
    stitchesMedia?: keyof TStitchesCurrentConfig["media"];
}
export const useMediaQuery = ({
    query: queryOrig,
    stitchesMedia,
    specificQuery,
}: TUseMediqQueryHookProps): boolean => {
    let query = queryOrig || "";

    if (stitchesMedia) {
        query = config["media"][stitchesMedia];
    }

    if (specificQuery?.length === 2) {
        const [comparisonChar, size] = specificQuery;
        let origin = "min";

        if (comparisonChar === "<") {
            origin = "max";
        }

        query = `(${origin}-width:${size}px)`;
    }

    const getMatches = (query: string): boolean => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }

        return false;
    };

    const [matches, setMatches] = useState<boolean>(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    useLayoutEffect(() => {
        const matchMedia = window.matchMedia(query);

        handleChange();

        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange);
        } else {
            matchMedia.addEventListener("change", handleChange);
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange);
            } else {
                matchMedia.removeEventListener("change", handleChange);
            }
        };
    }, [query]);

    return matches;
};
