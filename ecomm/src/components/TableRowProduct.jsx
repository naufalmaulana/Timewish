import { useDispatch } from "react-redux";
import { deleteProduct, fetchProduct } from "../store/appSlice";
import { Link } from "react-router-dom";

export default function TableRowProduct({item, index}){
  const dispatch = useDispatch();

    return(
        <>
            <tr className="text-capitalize">
                {/* <th scope="row">{index + 1}</th> */}
                <td>{item.name}</td>
                <td>Rp.{item.price}</td>
                <td>{item.stock}</td>
                <td>
                    <img src={item.imgUrl} alt={item.name} className="object-cover" width={100} height={100}/>
                </td>
                <td>
                    <p className="elipsis-3 m-0">
                        {item.description}
                    </p>
                </td>
                <td>
                    <div className="action d-flex align-items-center gap-2">
                        <button 
                        className="actionItem border-0 bg-transparent"      
                        onClick={() => {
                            dispatch(deleteProduct(item.id));
                        }}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1621_8327)">
                                <path d="M26.6667 6.66669C27.0203 6.66669 27.3594 6.80716 27.6095 7.05721C27.8595 7.30726 28 7.6464 28 8.00002C28 8.35364 27.8595 8.69278 27.6095 8.94283C27.3594 9.19288 27.0203 9.33335 26.6667 9.33335H25.3333L25.3293 9.42802L24.0853 26.856C24.0374 27.5288 23.7364 28.1584 23.2428 28.6181C22.7492 29.0778 22.0998 29.3334 21.4253 29.3334H10.5733C9.89885 29.3334 9.24942 29.0778 8.75585 28.6181C8.26227 28.1584 7.96122 27.5288 7.91333 26.856L6.66933 9.42935L6.66667 9.33335H5.33333C4.97971 9.33335 4.64057 9.19288 4.39052 8.94283C4.14048 8.69278 4 8.35364 4 8.00002C4 7.6464 4.14048 7.30726 4.39052 7.05721C4.64057 6.80716 4.97971 6.66669 5.33333 6.66669H26.6667ZM18.6667 2.66669C19.0203 2.66669 19.3594 2.80716 19.6095 3.05721C19.8595 3.30726 20 3.6464 20 4.00002C20 4.35364 19.8595 4.69278 19.6095 4.94283C19.3594 5.19288 19.0203 5.33335 18.6667 5.33335H13.3333C12.9797 5.33335 12.6406 5.19288 12.3905 4.94283C12.1405 4.69278 12 4.35364 12 4.00002C12 3.6464 12.1405 3.30726 12.3905 3.05721C12.6406 2.80716 12.9797 2.66669 13.3333 2.66669H18.6667Z" fill="#070606"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1621_8327">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <Link 
                        to={`/cms/${item.id}/edit`}
                        className="actionItem border-0 bg-transparent"      
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1623_8332)">
                                <path d="M3.75117 20.6222L2.06228 27.9111C2.00402 28.1775 2.00602 28.4536 2.06813 28.7192C2.13024 28.9848 2.25089 29.2331 2.42127 29.4461C2.59165 29.6591 2.80746 29.8313 3.05293 29.9502C3.2984 30.0691 3.56732 30.1317 3.84006 30.1333C3.9671 30.1471 4.09525 30.1471 4.22228 30.1333L11.5556 28.4444L25.6356 14.4178L17.7778 6.57776L3.75117 20.6222Z" fill="#070606"/>
                                <path d="M30.0622 7.39556L24.8178 2.15111C24.473 1.80806 24.0064 1.61548 23.52 1.61548C23.0336 1.61548 22.567 1.80806 22.2222 2.15111L19.3066 5.06667L27.1555 12.9156L30.0711 10C30.2417 9.82852 30.3768 9.62507 30.4687 9.4013C30.5607 9.17754 30.6075 8.93784 30.6067 8.69594C30.6059 8.45403 30.5574 8.21466 30.4639 7.99153C30.3705 7.76839 30.234 7.56587 30.0622 7.39556Z" fill="#070606"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1623_8332">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    )
}