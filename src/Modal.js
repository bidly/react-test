import React, { Component } from 'react';
import Warper from "./Warper";
import Popup from "reactjs-popup";
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
};
const dataa = [{
    name: '',
    id: 0,
    type: '',
    image: ''
}];

const CustomModal = () => (


    <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        contentStyle={contentStyle}
    >
        {close => (
            <div className="modal">
                <a className="close" onClick={close}>
                    &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                    <ReactTable
                        data={dataa}
                        columns={[
                            {
                                Header: "id",
                                accessor: "id",
                            },
                            {
                                Header: "Name",
                                accessor: "name",
                            },
                            {
                                Header: "",
                                id: "id",

                            }
                        ]}
                    />

                </div>
                <div className="actions">
                    <Popup
                        trigger={<button className="button"> Menu Demo </button>}
                        position="top center"
                        closeOnDocumentClick
                        contentStyle={{ padding: "0px", border: "none" }}
                    >
                        <div className="menu">
                            <div className="menu-item"> Menu item 1</div>
                            <div className="menu-item"> Menu item 2</div>
                            <div className="menu-item"> Menu item 3</div>
                            <Popup
                                trigger={<div className="menu-item"> sup Menu </div>}
                                position="right top"
                                on="hover"
                                closeOnDocumentClick
                                mouseLeaveDelay={300}
                                mouseEnterDelay={0}
                                contentStyle={{ padding: "0px", border: "none" }}
                                arrow={false}
                            >
                                <div className="menu">
                                    <div className="menu-item"> item 1</div>
                                    <div className="menu-item"> item 2</div>
                                    <div className="menu-item"> item 3</div>
                                </div>
                            </Popup>
                            <div className="menu-item"> Menu item 4</div>
                        </div>
                    </Popup>
                    <button
                        className="button"
                        onClick={() => {
                            console.log("modal closed ");
                            close();
                        }}
                    >
                        close modal
                    </button>
                </div>
            </div>
        )}
    </Popup>
);

export default Warper(CustomModal);
