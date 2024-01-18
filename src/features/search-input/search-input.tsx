import { Icons, Input } from "@/shared/ui";
import { useRouter } from "next/router";
import React, {
    ChangeEvent,
    KeyboardEvent,
    KeyboardEventHandler,
    useEffect,
    useState,
} from "react";

export const SearchInput = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    useEffect(() => {}, [router]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            router.push({
                query: { ...router.query, search: search },
            });
        }
    };

    useEffect(() => {
        setSearch((router.query.search as string) || "");
    }, [router.query.search]);

    return (
        <div>
            <Input
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Поиск"
                suffix={<Icons.SearchCircle />}
            />
        </div>
    );
};
