import { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';


const Filter = (props) => {
    return (
        <>
        <div className="ui mini menu menuWidth">
            
            <div className="item">
                <i className="table icon"></i>
                <span className='ui simple'>CRM Table</span>
            </div>
            { props.spinner == false &&
            <Fragment>
                <div className="item">
                    
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" 

                            onChange={props.searchHandler} 
                            
                            value= {props.searchText && props.searchText}
                            placeholder="Search Name..."/>


                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>

                <div className="item">
                    <div className="ui menu simple labeled icon button dropdown">
                        {props.tableSelection}
                        <i className="dropdown icon"></i>
                        <div className="menu">
                        <div className="item" onClick={()=>{props.setTableSelection("Orders");}}>Orders</div>
                        <div className="item" onClick={()=>{props.setTableSelection("Activity");}}>Potentials</div>
                        <div className="item" onClick={()=>{props.setTableSelection("Inventory");}} >Inventory</div>
                        </div>
                    </div>
                </div> 
            </Fragment>
            }
            
            <div className="right menu">
                {props.tableSelection === "Orders" &&
                    props.addOrderFormButton &&
                    <div className="item">
                         <div onClick={props.ShowOrderFormHandler} className="ui menu simple labeled icon button">
                         <i className="add icon"></i>
                         <span className="text">Add</span>
                        </div>
                    </div>
                }
                <div className="item">
                <div className="ui simple dropdown labeled menu icon button">
                    <i className="filter icon"></i>
                    <span className="text">Filter</span>
                    <div className="menu">
                        <div className="header">
                        <i className="tags icon"></i>
                        Filter by tag
                        </div>
                        <div className="divider"></div>
                        <div className="item">
                        Important
                        </div>
                        <div className="item">
                        Announcement
                        </div>
                        <div className="item">
                        Discussion
                        </div>
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div onClick={props.updateFetchHandler} className="ui simple menu labeled icon button">
                        <i className="redo icon"></i>
                        <span className="text">Update</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="tableMenu right">
            
            
        </div>
        </>
    )
}

export default Filter;