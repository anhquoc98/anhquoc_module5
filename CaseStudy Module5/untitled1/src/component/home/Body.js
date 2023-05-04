import {Component} from "react";
import {ListServiceFurama} from "../data/ListServiceFurama";


export class Body extends Component {
    render() {
        return (<>
                <>
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{height: 500}}>
                                <img
                                    src="https://phulong.com/imgvtool.ashx?url=/UploadFiles/image_contents/untitled-1-01-574a4c.png&w=1200"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>FURAMA INTERNATIONAL</h5>
                                    <p>
                                        Furama Hotels cung cấp cho khách du lịch giải trí và kinh doanh như
                                        một bối cảnh được bổ nhiệm để thưởng thức các công việc nghỉ ngơi và
                                        tiếp thêm sinh lực. Được nuông chiều bởi dịch vụ ấm áp của chúng tôi
                                        từ trái tim khi bạn đắm mình vào các nền văn hóa độc đáo và những
                                        trải nghiệm sâu sắc trên hành trình của bạn.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{height: 500}}>
                                <img
                                    src="https://phulong.com/imgvtool.ashx?url=/UploadFiles/image_contents/untitled-2-01-748c34.png&w=1200"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>FURAMA INTERNATIONAL</h5>
                                    <p>Furama Hotels cung cấp cho khách du lịch giải trí và kinh doanh như
                                        một bối cảnh được bổ nhiệm để thưởng thức các công việc nghỉ ngơi và
                                        tiếp thêm sinh lực. Được nuông chiều bởi dịch vụ ấm áp của chúng tôi
                                        từ trái tim khi bạn đắm mình vào các nền văn hóa độc đáo và những
                                        trải nghiệm sâu sắc trên hành trình của bạn.</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{height: 500}}>
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/DES-PHONGNHA-1.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>FURAMA INTERNATIONAL</h5>
                                    <p>Furama Hotels cung cấp cho khách du lịch giải trí và kinh doanh như
                                        một bối cảnh được bổ nhiệm để thưởng thức các công việc nghỉ ngơi và
                                        tiếp thêm sinh lực. Được nuông chiều bởi dịch vụ ấm áp của chúng tôi
                                        từ trái tim khi bạn đắm mình vào các nền văn hóa độc đáo và những
                                        trải nghiệm sâu sắc trên hành trình của bạn.</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/*Phần thân*/}

                    <div
                        className="vc_row wpb_row vc_row-fluid vc_custom_1624684150803 vc_row-has-fill vc_row-o-equal-height vc_row-flex">
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                flexDirection: "column",
                                zIndex: 1,
                                WebkitBoxFlex: 1,
                            }}
                        >
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2023/04/family-package-Furama-Resort-Danang.jpg"
                                alt=""
                            />
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill"
                             style={{backgroundColor: "#b4e8c0"}}>
                            <div className="vc_column-inner vc_custom_1553895336610">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" style={{height: 22}}>
                                        <span className="vc_empty_space_inner"/>
                                    </div>
                                    <h2
                                        style={{
                                            fontSize: 24,
                                            color: "#056055",
                                            textAlign: "left",
                                            fontFamily: "Playfair Display",
                                            fontWeight: 700,
                                            fontStyle: "normal"
                                        }}
                                        className="vc_custom_heading"
                                    >
                                        Kỳ nghỉ Gia đình 3 Ngày 2 Đêm trọn niềm vui chỉ từ 10,620,000 VND
                                    </h2>
                                    <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                            <div className="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r x126k92a">
                                                <div dir="auto">
                                                    <div className="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r x126k92a">
                                                        <div dir="auto">
                                                            <div dir="auto">
                                                                <div
                                                                    className="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r x126k92a">
                                                                    <div dir="auto">
                                                                        Đã bao lâu bạn chưa cùng “mái ấm gia đình” của
                                                                        mình đi
                                                                        du lịch?
                                                                    </div>
                                                                    <div dir="auto"/>
                                                                    <div dir="auto">
                                                                        Thiên đường nghỉ dưỡng Furama Resort Đà Nẵng
                                                                        chào đón
                                                                        bạn với tiện nghi phòng nghỉ cao cấp, dịch vụ ẩm
                                                                        thực
                                                                        nổi tiếng hàng đầu tại Đà Nẵng, dịch vụ chăm sóc
                                                                        sức
                                                                        khỏe tiêu chuẩn quốc tế và hàng loạt hoạt động
                                                                        vui
                                                                        chơi giải trí cho cả gia đình, đặc biệt là dành
                                                                        cho
                                                                        các “thượng khách nhí”:
                                                                    </div>
                                                                    <div dir="auto">
                                                                        <hr/>
                                                                        <p>Ưu đãi bao gồm:</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
                                                                    <ul>
                                                                        <li dir="auto">
                                                                            Kỳ nghỉ 3 ngày 2 đêm | Chỉ từ 10,620,000
                                                                            VND/ phòng/
                                                                            2 đêm | Tối đa: 2 người lớn và 2 trẻ em.
                                                                        </li>
                                                                        <li dir="auto">Đưa đón sân bay.</li>
                                                                        <li dir="auto">
                                                                            Thưởng thức Buffet Tiệc trà chiều và bánh
                                                                            ngọt (*)
                                                                        </li>
                                                                        <li dir="auto">
                                                                            Tận hưởng đồ uống tại quầy Bar Hải Vân
                                                                            Lounge.
                                                                        </li>
                                                                        <li dir="auto">
                                                                            Tận hưởng dịch vụ Gội đầu tại V-senses
                                                                            Wellness
                                                                            &amp; Spa.
                                                                        </li>
                                                                        <li dir="auto">Buffet sáng Quốc tế hàng ngày.
                                                                        </li>
                                                                        <li dir="auto">
                                                                            Nhận phòng sớm: 11:00 và Trả phòng muộn:
                                                                            14:00 (Tùy
                                                                            theo tình trạng phòng trống)
                                                                        </li>
                                                                        <li dir="auto">
                                                                            Nhiều hoạt động cho “thượng khách nhí” tại
                                                                            câu lạc
                                                                            bộ trẻ em “Little Nemo” hằng ngày.
                                                                        </li>
                                                                    </ul>
                                                                    <div dir="auto">
                                                                        <hr/>
                                                                    </div>
                                                                    <ul>
                                                                        <li dir="auto">Thời hạn đặt phòng: đến
                                                                            31/5/2023
                                                                        </li>
                                                                        <li dir="auto">Thời hạn lưu trú: đến
                                                                            31/12/2023
                                                                        </li>
                                                                        <li dir="auto">Chương trình áp dụng có điều
                                                                            kiện.
                                                                        </li>
                                                                        <li dir="auto">
                                                                            Hotline: +84 236 3847 888 | Email:
                                                                            reservation@furamavietnam.com
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vc_empty_space" style={{height: 22}}>
                                        <span className="vc_empty_space_inner"/>
                                    </div>
                                    <div className="vc_btn3-container vc_btn3-inline">
                                        <a
                                            style={{backgroundColor: "#046056", color: "#ffffff"}}
                                            className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-custom vc_btn3-icon-left"
                                            href="https://book-directonline.com/properties/furamaresortdanangdirect?locale=en&checkInDate=2023-05-29&checkOutDate=2023-05-31&promo=&items[0][adults]=2&items[0][children]=2&items[0][infants]=0&items[0][rateId]=530793&currency=VND&trackPage=yes&selected=0"
                                            title="Đặt phòng"
                                            target="_blank"
                                        >
                                            <i className="vc_btn3-icon fa fa-envelope-open-o"/> Đặt ngay
                                        </a>
                                    </div>
                                    <div className="vc_empty_space" style={{height: 22}}>
                                        <span className="vc_empty_space_inner"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="wpb_wrapper">
                        <h2
                            style={{
                                fontSize: 24,
                                color: "#cbbe73",
                                textAlign: "center",
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                fontStyle: "normal"
                            }}
                            className="vc_custom_heading"
                        >
                            CÁC LOẠI PHÒNG
                        </h2>
                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper"/>
                                </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element ">
                                            <div className="wpb_wrapper">
                                                <p>
                                                    Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách
                                                    truyền thống Việt Nam kết hợp với phong cách Pháp, 2 tòa nhà 4
                                                    tầng có hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những
                                                    khu vườn nhiệt đới xanh tươi mát. Ngoài ra, khu nghỉ dưỡng
                                                    Furama còn cung cấp các liệu pháp spa, phòng xông hơi ướt,
                                                    phòng xông hơi khô, dịch vụ mát-xa cạnh hồ bơi, các dịch vụ
                                                    thể thao dưới nước và các lớp tập yoga và Thái Cực Quyền trên
                                                    bãi biển.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{margin: "5%"}}>
                        {
                            ListServiceFurama.map(service => (
                                <div className="card " style={{width: "18rem", margin: "auto"}}>
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1_M2-1047x563.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.nameService}</h5>
                                        <p className="card-text">
                                            {service.detail}
                                        </p>
                                        <b>Diện tích phòng : {service.area}</b>
                                        <p>Số lượng người: {service.numberPeople}</p>
                                        <a href="#" className="btn btn-primary">
                                            Chi tiết
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-primary"
                                            style={{backgroundColor: "gray"}}
                                        >
                                            Sửa
                                        </a>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            style={{backgroundColor: "red"}}
                                        >
                                            Xóa
                                        </button>
                                        {/*            modal*/}
                                        <div
                                            className="modal fade"
                                            id="exampleModal"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                            Xóa dịch vụ
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        Bạn có muốn xóa PHÒNG SUITE HƯỚNG BIỂN?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Thoát
                                                        </button>
                                                        <button type="button" className="btn btn-primary">
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                    {/*phân trang*/}
                    {/*Phân trang*/}
                    <nav
                        className="d-flex justify-content-center"
                        aria-label="Page navigation example"
                    >
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    Trước
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#daeae9",
                                        color: "#1d1d1c"
                                    }}
                                >
                                    Sau
                                </a>
                            </li>
                        </ul>
                    </nav>
                </>

            </>
        );
    }
}