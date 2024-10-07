import { useParams } from "react-router-dom";
export default function User() {
  const params = useParams();
  //const {id} = useParams();
  console.log(params);
  return <h1 className="text-success">User {params.id}</h1>;
}
