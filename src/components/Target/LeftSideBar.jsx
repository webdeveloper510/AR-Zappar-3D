import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leftSideBarAction } from "../store/LeftSideBarReducer";

const LeftSideBar = () => {
  const [isFillBtn,setisFillBtn]=useState('#344B60')
  const [isFillText,setisFillText]=useState('#344B60')
  const [isFillImg,setisFillImg]=useState('#344B60')
  const [isFillVdo,setisFillVdo]=useState('#344B60')
  const [isFill3D,setisFill3D]=useState('#344B60')
  const [isFillApplets,setisFillApplets]=useState('#344B60')
  const isButtonDetailShow = useSelector(
    (state) => state.LeftSideBarReducer.isButtonDetailShow
  );
  const isShowTextDetail = useSelector(
    (state) => state.LeftSideBarReducer.isShowTextDetail
  );
  const isShowImageDetail = useSelector(
    (state) => state.LeftSideBarReducer.isShowImageDetail
  );
  const isShowVideoDetail = useSelector(
    (state) => state.LeftSideBarReducer.isShowVideoDetail
  );
  const isShowModalDetail = useSelector(
    (state) => state.LeftSideBarReducer.isShowModalDetail
  );
  const isShowAppletsDetail = useSelector(
    (state) => state.LeftSideBarReducer.isShowAppletsDetail
  );

  const dispatch = useDispatch();

  const images = [
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="20"
          viewBox="0 0 14 20"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill={isFillBtn}
              fillRule="nonzero"
              d="M17.49 13.047c1.052 0 1.906.804 1.906 1.8l-.008 1.162.031-.01a2 2 0 01.426-.078l.15-.006c.75 0 1.4.41 1.71 1.005l.045.094.082-.034c.175-.066.363-.108.56-.123l.149-.005c1.051 0 1.906.804 1.906 1.793v.447l.065-.02a2 2 0 01.426-.079l.15-.005c1.051 0 1.905.804 1.905 1.793L27 23.408C27 27.044 23.861 30 20.001 30s-7-2.956-7-6.566c-.033-1.17.421-2.155 1.172-2.856.294-.274.623-.49.934-.619.193-.08.383-.13.586-.135l-.131.01.022-4.992c0-.944.775-1.718 1.757-1.79zm0 .952c-.493 0-.895.378-.895.843l-.036 8.329c0 .197-.17.357-.379.357s-.378-.16-.378-.357v-2.349c0-.258-1.848.55-1.79 2.586 0 3.11 2.687 5.64 5.99 5.64 3.3 0 5.987-2.53 5.987-5.64l-.007-2.625c0-.465-.402-.843-.895-.843s-.894.378-.894.843l.007.25c0 .198-.17.357-.379.357-.21 0-.379-.16-.379-.356l-.007-2.387c0-.465-.401-.843-.894-.843-.494 0-.895.378-.895.843l.007 1.715c0 .198-.17.357-.379.357-.21 0-.379-.16-.379-.357l-.007-2.652c0-.465-.4-.842-.894-.842-.493 0-.895.378-.895.842l.007 2.652c0 .198-.17.357-.379.357s-.378-.16-.378-.357l.036-5.52c0-.465-.402-.843-.895-.843zm4.303-.618v1h-2.147v-1h2.147zm-6.46 0v1h-2.146v-1h2.147zm-.417-2.671l1.518 1.43-.715.673-1.518-1.43.715-.673zm5.349 0l.715.673-1.518 1.43-.715-.674 1.518-1.43zM18.15 10v2.022h-1.167V10h1.167z"
              transform="translate(-13 -10)"
            ></path>
          </g>
        </svg>
      ),
      name: "Buttons",
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="20"
          viewBox="0 0 15 20"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill={isFillText}
              fillRule="nonzero"
              d="M27.4694534 11.225L21.2234727 11.225 21.2234727 30 19.812701 30 19.812701 11.225 13 11.225 13 10 28 10 28 11.225z"
              transform="translate(-13 -10)"
            ></path>
          </g>
        </svg>
      ),
      name: "Text",
    },

    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill={isFillImg}
              fillRule="nonzero"
              d="M15 14.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.475 11.504h-8.473v-3.066c.729-.714 1.877-1.438 3.498-1.438.676 0 1.641.174 2.483.659a5.039 5.039 0 012.492 3.845zm9.522-3.906l.08 4.002-8.597-.096c-.237-2.763-2.159-4.132-2.318-4.25a6.038 6.038 0 015.338-3.263c1.89 0 4.3.985 5.497 3.607zM11.002 13h18.002v8.175c-.91-1.175-2.807-2.678-5.504-2.678-2.607 0-5.005 1.492-6.173 3.71a5.956 5.956 0 00-2.827-.712 6.186 6.186 0 00-3.498 1.124V13zm-.546-1a.469.469 0 00-.456.44v15.12c.01.239.209.43.456.44h19.088a.469.469 0 00.456-.44V12.44a.466.466 0 00-.404-.44h-19.14z"
              transform="translate(-10 -12)"
            ></path>
          </g>
        </svg>
      ),
      name: "Images",
    },

    {
      id: 4,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill={isFillVdo}
              fillRule="nonzero"
              d="M14.5 27a1.5 1.5 0 011.415 1H29.5a.5.5 0 01.09.992L29.5 29H15.914a1.5 1.5 0 01-2.828 0H10.5a.5.5 0 01-.09-.992L10.5 28h2.585a1.5 1.5 0 011.415-1zm0 1a.5.5 0 100 1 .5.5 0 000-1zM29 10a1 1 0 011 1v13a1 1 0 01-1 1H11a1 1 0 01-1-1V11a1 1 0 011-1h18zm0 1H11v13h18V11zm-11.566 2.5a.91.91 0 01.464.127l5.131 3.034a.985.985 0 010 1.678l-5.131 3.033a.918.918 0 01-1.275-.36.992.992 0 01-.123-.479v-6.066c0-.534.418-.967.934-.967zm-.059 1v6l5.25-3-5.25-3z"
              transform="translate(-10 -10)"
            ></path>
          </g>
        </svg>
      ),
      name: "videos",
    },

    {
      id: 5,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="20"
          viewBox="0 0 18 20"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill={isFill3D}
              fillRule="nonzero"
              d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
              transform="translate(-11 -10)"
            ></path>
          </g>
        </svg>
      ),
      name: "3D",
    },
    {
      id: 6,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path
            fill={isFillApplets}
            d="M29.685 23.75a.5.5 0 01-.108.63l-.074.053-8.751 5.066a1.5 1.5 0 01-1.361.073l-.143-.073-8.751-5.066a.5.5 0 01.42-.904l.08.038 8.752 5.067a.5.5 0 00.421.037l.08-.037 8.752-5.067a.5.5 0 01.683.182zm0-3.568a.5.5 0 01-.108.631l-.074.052-8.751 5.067a1.5 1.5 0 01-1.361.073l-.143-.073-8.751-5.067a.5.5 0 01.42-.903l.08.038 8.752 5.067a.5.5 0 00.421.037l.08-.037L29.003 20a.5.5 0 01.683.182zm-10.437-9.325a1.5 1.5 0 011.504 0l8.751 5.067a1 1 0 010 1.73l-8.751 5.068a1.5 1.5 0 01-1.504 0l-8.751-5.067a1 1 0 010-1.731zm1.003.866a.5.5 0 00-.502 0l-8.751 5.066 8.751 5.067a.5.5 0 00.502 0l8.751-5.067z"
          ></path>
        </svg>
      ),
      name: "Applets",
    },
  ];

  return (
    <div
      style={{
        width: "70px",
        boxShadow: " 0 2px 4px 0 rgb(0 0 0 / 16%)",
        marginLeft: "0px",
      }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="threeD"
          style={{
            marginBottom: "20px",
            textAlign: "center",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (image.id === 1) {
              dispatch(leftSideBarAction.setisShowTextDetail(false));
              dispatch(leftSideBarAction.setisShowImageDetail(false));
              dispatch(leftSideBarAction.setisShowVideoDetail(false));
              dispatch(leftSideBarAction.setisShowModalDetail(false));
              dispatch(leftSideBarAction.setisShowAppletsDetail(false));
              setisFillText('#344B60')
              setisFillImg('#344B60')
              setisFillVdo('#344B60')
              setisFill3D('#344B60')
              setisFillApplets('#344B60')
              if (isButtonDetailShow === true) {
                dispatch(leftSideBarAction.setisButtonDetailShow(false));
                setisFillBtn('#344B60')
              } else {
                dispatch(leftSideBarAction.setisButtonDetailShow(true));
                setisFillBtn('#0096FF')
              }
            }
            if (image.id === 2) {
              dispatch(leftSideBarAction.setisButtonDetailShow(false));
              dispatch(leftSideBarAction.setisShowImageDetail(false));
              dispatch(leftSideBarAction.setisShowVideoDetail(false));
              dispatch(leftSideBarAction.setisShowModalDetail(false));
              dispatch(leftSideBarAction.setisShowAppletsDetail(false));
              setisFillImg('#344B60')
              setisFillVdo('#344B60')
              setisFill3D('#344B60')
              setisFillApplets('#344B60')
              setisFillBtn('#344B60')
              if (isShowTextDetail === true) {
                dispatch(leftSideBarAction.setisShowTextDetail(false));
                setisFillText('#344B60')
              } else {
                dispatch(leftSideBarAction.setisShowTextDetail(true));
                setisFillText('#0096FF')
              }
            }
            if (image.id === 3) {
              dispatch(leftSideBarAction.setisShowTextDetail(false));
              dispatch(leftSideBarAction.setisButtonDetailShow(false));
              dispatch(leftSideBarAction.setisShowVideoDetail(false));
              dispatch(leftSideBarAction.setisShowModalDetail(false));
              dispatch(leftSideBarAction.setisShowAppletsDetail(false));
              setisFillVdo('#344B60')
              setisFill3D('#344B60')
              setisFillApplets('#344B60')
              setisFillBtn('#344B60')
              setisFillText('#344B60')
              if (isShowImageDetail === true) {
                dispatch(leftSideBarAction.setisShowImageDetail(false));
                setisFillImg('#344B60')
              } else {
                dispatch(leftSideBarAction.setisShowImageDetail(true));
                setisFillImg('#0096FF')
              }
            }
            if (image.id === 4) {
              dispatch(leftSideBarAction.setisShowImageDetail(false));
              dispatch(leftSideBarAction.setisShowTextDetail(false));
              dispatch(leftSideBarAction.setisButtonDetailShow(false));
              dispatch(leftSideBarAction.setisShowModalDetail(false));
              dispatch(leftSideBarAction.setisShowAppletsDetail(false));
              setisFill3D('#344B60')
              setisFillApplets('#344B60')
              setisFillBtn('#344B60')
              setisFillText('#344B60')
              setisFillImg('#344B60')
              if (isShowVideoDetail === true) {
                dispatch(leftSideBarAction.setisShowVideoDetail(false));
                setisFillVdo('#344B60')
              } else {
                dispatch(leftSideBarAction.setisShowVideoDetail(true));
                setisFillVdo('#0096FF')
              }
            }
            if (image.id === 5) {
              dispatch(leftSideBarAction.setisShowTextDetail(false));
              dispatch(leftSideBarAction.setisShowImageDetail(false));
              dispatch(leftSideBarAction.setisShowVideoDetail(false));
              dispatch(leftSideBarAction.setisButtonDetailShow(false));
              dispatch(leftSideBarAction.setisShowAppletsDetail(false));
              setisFillApplets('#344B60')
              setisFillBtn('#344B60')
              setisFillText('#344B60')
              setisFillImg('#344B60')
              setisFillVdo('#344B60')
              if (isShowModalDetail === true) {
                dispatch(leftSideBarAction.setisShowModalDetail(false));
                setisFill3D('#344B60')
              } else {
                dispatch(leftSideBarAction.setisShowModalDetail(true));
                setisFill3D('#0096FF')
              }
            }
            if (image.id === 6) {
              dispatch(leftSideBarAction.setisShowTextDetail(false));
              dispatch(leftSideBarAction.setisShowImageDetail(false));
              dispatch(leftSideBarAction.setisShowVideoDetail(false));
              dispatch(leftSideBarAction.setisButtonDetailShow(false));
              dispatch(leftSideBarAction.setisShowModalDetail(false));
              setisFillBtn('#344B60')
              setisFillText('#344B60')
              setisFillImg('#344B60')
              setisFillVdo('#344B60')
              setisFill3D('#344B60')
              if (isShowAppletsDetail === true) {
                dispatch(leftSideBarAction.setisShowAppletsDetail(false));
                setisFillApplets('#344B60')
              } else {
                dispatch(leftSideBarAction.setisShowAppletsDetail(true));
                setisFillApplets('#0096FF')
              }
            }
          }}
        >
          {image.svg}
          <span className="nav-link p-0 m-0 link-dark">{image.name}</span>
          <div style={{borderTop:'1px solid rgb(178, 196, 215)',height: 'auto',width: '35px', marginTop: "10px",marginLeft:'15px'}}></div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
