import React from "react";

const Pagination = ({ setOffset }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <button
        onClick={() => {
          setOffset((x) => {
            console.log(x);

            if (x === 0) {
              return setOffset(0);
            } else {
              return x - 10;
            }
          });
        }}
        className="btn btn-dark me-3"
      >
        Prev
      </button>
      <button
        onClick={() => {
          setOffset((x) => {
            console.log(x);

            if (x > 111) {
              console.log("no more results to show");
              setOffset(0);
            } else {
              return x + 10;
            }
          });
        }}
        className="btn btn-dark"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
