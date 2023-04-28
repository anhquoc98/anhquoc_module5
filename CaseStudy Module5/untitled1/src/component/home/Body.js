import {Component} from "react";


export class Body extends Component{
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
                            <div className="carousel-item active" style={{ height: 500 }}>
                                <img
                                    src="53124-furama-resort-da-nang-1-700x464.jpg"
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
                            <div className="carousel-item" style={{ height: 500 }}>
                                <img
                                    src="DN734-Furama-da-nang-DDTG-2017-ok.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: 500 }}>
                                <img
                                    src="furama-resort-da-nang-03.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/*Phần thân*/}
                    <div className="wpb_wrapper">
                        <h2
                            style={{
                                fontSize: 24,
                                color: "#cbbe73",
                                lineHeight: 36,
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
                                    <div className="wpb_wrapper" />
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
                                    <div className="wpb_wrapper" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ margin: "5%" }}>
                        <div className="card " style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal1"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel1">
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal11"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel11">
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
                    </div>
                    <div className="row" style={{ margin: "5%" }}>
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal2"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel2">
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal3"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel3">
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal4"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel4">
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
                    </div>
                    <div className="row" style={{ margin: "5%" }}>
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal5"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel5">
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal6"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel6">
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
                        <div className="card" style={{ width: "18rem", margin: "auto" }}>
                            <img
                                src="double-bed-ocean-deluxe-furama-da-nang.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">
                                    Đệm lụa và khăn trải giường cùng gối xa hoa làm tăng sự sang trọng và
                                    quyến rũ trong cá tính của chính căn phòng tuyệt đẹp này.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Chi tiết
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "gray" }}
                                >
                                    Sửa
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ backgroundColor: "red" }}
                                >
                                    Xóa
                                </button>
                                {/*            modal*/}
                                <div
                                    className="modal fade"
                                    id="exampleModal7"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel7">
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
                    </div>
                    <div style={{ textAlign: "center", margin: "auto" }}>
                        <a
                            href=""
                            className="btn btn"
                            style={{ backgroundColor: "black", marginBottom: 20 }}
                        >
                            <span style={{ color: "linen" }}>Xem tất cả các phòng tại đây</span>
                        </a>
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