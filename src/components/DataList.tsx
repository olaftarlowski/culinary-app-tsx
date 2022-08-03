type Fields = {
  TAKIJEDEN: Array<string>,
  selekty: Array<string>,
  Name: string,
  Notes: string,
  Status: string,
  qwerty: Array<string>,
}

interface Record {
  id: string;
  createdTime: string;
  fields: any;
}

// interface Props {
//   data: Record[];
// }

interface Props {
  data: any;
}

const DataList: React.FC<Props> = ({ data }) => {
  console.log("DATA Z DATALIST", data);
  const check = () => {
    console.log(data)
  }
  return (
    <div>
      <h2>DataList</h2>
      <button onClick={check}>DATA LIST CHECK</button>
      {/* {data && data.map((el: Record) => {
        return <div key={el.id}>{el.id}</div>
      })} */}
      <div>
        {data && data.map((item: Record) => {
          return (
            <div
              key={item.id}
              style={{ display: "flex", border: "1px solid red" }}
            >
              <div>{item.fields.Name}</div>
              <div>{item.fields.Notes}</div>
              <div>{item.fields.Status}</div>
              <div style={{ border: "1px solid yellow", margin: 12 }}>
                {item.fields["TAKIJEDEN"].map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
              <div style={{ border: "1px solid green", margin: 12 }}>
                {item.fields.qwerty.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
              <div style={{ border: "1px solid blue", margin: 12 }}>
                {item.fields.selekty.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
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
