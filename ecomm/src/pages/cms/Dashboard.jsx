import { useDispatch, useSelector } from "react-redux";
import { changePageProduct, fetchProduct} from '../../store/appSlice'
import TableRowProduct from "../../components/TableRowProduct";

export default function Dashboard(){
    const {data, loading, error, totalProduct, page} = useSelector((state) => state.appSlice)
    const dispatch = useDispatch()

    if (loading) {
      return (
        <>
          <div className="main text-center center-flex vh-100">
            <div className="clockLoader"></div>
          </div>
        </>
      );
    }
    
    if (error) {
      return (
        <>
          <div className="main text-center center-flex vh-100">
            <p>{error}</p>
          </div>
        </>
      );
    }
    
    return(
        <>
        <main className="main">
            <h1 className="mainTitle mt-0 mb-1">
                Dashboard
            </h1>
            <h2 className="mainSubtitle mt-0 mb-5">
                Total Product: {totalProduct} Item
            </h2>
            <div className="mainControl d-flex align-items-center justify-content-between mb-3">
                <div className="mainControlInfo fw-bold text-uppercase">
                    Page: {page}
                </div>
                <div className="mainControlPagination d-flex align-items-center gap-2">
                    <button className="py-2 px-3 rounded" onClick={() => {
                        dispatch(fetchProduct({page: page === 1 ? 1 : page - 1}))
                    }} disabled={page === 1}>
                        &lt;
                    </button>
                    <button className="py-2 px-3 rounded" onClick={() => {
                        dispatch(fetchProduct({page: page + 1}))
                    }}>
                        &gt;
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="text-uppercase">
                            {/* <th scope="col">No.</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, i) => {
                            return <TableRowProduct key={el.id} item={el} index={i}/>
                        })}
                    </tbody>
                </table>
            </div>
        </main>
        </>
    )
}