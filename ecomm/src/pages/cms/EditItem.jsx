import { useParams } from "react-router-dom";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../../store/appSlice";

export default function EditItem(){
    const { product } = useSelector((state) => state.appSlice);

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id]);

    return(
        <>
        <main className="main">
            <h1 className="mainTitle mt-0 mb-5">
                Edit Item #{id}
            </h1>
            <Form product={product}/>
        </main>
        </>
    )
}