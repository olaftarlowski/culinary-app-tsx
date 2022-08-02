interface Props {
  data: any;
}

const DataList: React.FC<Props> = ({ data }) => {
  console.log("DATA Z DATALIST", data);
  return (
    <div>
      <h2>DataList</h2>
      {/* <div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                style={{ display: "flex", border: "1px solid red" }}
              >
                <div>{item.fields.Name}</div>
                <div>{item.fields.Notes}</div>
                <div>{item.fields.Status}</div>
                <div style={{ border: "1px solid yellow", margin: 12 }}>
                  {item.fields["TAKI JEDEN"].map((el) => {
                    return <div key={el}>{el}</div>;
                  })}
                </div>
                <div style={{ border: "1px solid green", margin: 12 }}>
                  {item.fields.qwerty.map((el) => {
                    return <div key={el}>{el}</div>;
                  })}
                </div>
                <div style={{ border: "1px solid blue", margin: 12 }}>
                  {item.fields.selekty.map((el) => {
                    return <div key={el}>{el}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default DataList;

// import React from 'react'

// const DataList = () => {
//   return (
//     <div>DataList</div>
//   )
// }

// export default DataList
