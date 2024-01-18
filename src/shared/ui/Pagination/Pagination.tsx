import React from "react";
import ReactPaginate from "react-paginate";
import { Icons } from "..";
import { Wrapper } from "./styled";

interface IPagination {
    selectedPage?: number;
    pageCount: number;
    handlePageChange: (val: { selected: number }) => void;
}

export const Pagination = ({
    handlePageChange,
    selectedPage,
    pageCount,
}: IPagination) => {
    return (
        <Wrapper>
            <ReactPaginate
                initialPage={selectedPage}
                breakLabel="...."
                previousClassName="page"
                nextClassName="page"
                className="paginator"
                activeClassName="page--active"
                pageClassName="page"
                nextLabel={<Icons.ArrowRight />}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<Icons.ArrowLeft />}
                renderOnZeroPageCount={null}
            />
        </Wrapper>
    );
};
