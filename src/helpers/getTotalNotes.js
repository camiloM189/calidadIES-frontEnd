import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const getTotalNotes = () => {
  const {ItemSet} = useSelector(state => state.actividades);
  const {pagina,_id,id,name} = useParams();
  const {metas} = ItemSet;
 
  const trueMetas = metas && metas.filter(meta => meta._id === id);
  const [{total}] = trueMetas;
  console.log(total);
  return total;
}
