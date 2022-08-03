interface Fields {
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
  fields: Fields;
}

interface Props {
  data: Array<Record>;
}

const DataList: React.FC<Props> = ({ data }) => {
  // console.log("DATA from DATALIST", data);
  const checkDataFromProps = () => {
    console.log(data)
  }

  return (
    <div>
      <h2>DataList</h2>
      <button onClick={checkDataFromProps}>DATA LIST CHECK</button>
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
                {item.fields["TAKIJEDEN"].map((el) => {
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
      </div>
    </div>
  );
};

export default DataList;
