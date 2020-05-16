import React from "react";
import {connect} from "react-redux";
import * as actionscreators from './actions'
import axios_o from 'axios';
class Test extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        axios_o.get("/assigments/index").then(response=>{
           // console.log(response.data.data)
            this.props.LoadData(response.data.data)
        })

    }

    render() {
        return (
            <div>
                <table border={1}>
                    <thead>
                      <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>operations</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(
                        (item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={()=>this.props.HandleDelete(item.id)}>Delete</button>
                                <button onClick={()=>this.props.HandleEdit(item)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                    <tr>

                        <td><input onChange={(e)=>this.props.HandleIDVal(e.target.value)} value={this.props.id_val}/></td>
                        <td><input onChange={(e)=>this.props.HandleNameVal(e.target.value)} value={this.props.name_val}/></td>
                        <td>
                            {this.props.operation_type === "Add" &&
                            <button onClick={()=>this.props.HandleAdd(this.props.id_val,this.props.name_val)}>Add</button>
                            }
                            {this.props.operation_type === "Edit" &&
                            <>
                            <button onClick={()=>this.props.HandleUpdate(this.props.id_val,this.props.name_val)}>Update</button>
                            <button onClick={this.props.HandelCancel}>Cancel</button>
                            </>
                            }
                        </td>

                    </tr>

                    </tbody>
                </table>

                {this.props.id_val}
                {this.props.name_val}


            </div>
        )
    }

}



const mapStateToProps=(state)=>{
    return{
        data:state.data,
        id_val:state.id_val,
        name_val:state.name_val,
        operation_type:state.operation_type
    }
}

/* const mapDispatchToProps=(dispatch)=>{
    return {
        HandleEdit:(item)=> dispatch({type:'Edit',item:item}),
        HandleDelete:(id)=>dispatch({type:'Delete',id:id}),
        HandleIDVal:(id_value)=>dispatch({type:'Store_ID_VAL',id_value:id_value}),
        HandleNameVal:(name_value)=>dispatch({type:'Store_Name_VAL',name_value:name_value}),
        HandleAdd:()=>dispatch({type:'Add'}),
        HandelCancel:()=>dispatch({type:'Cancel'}),
        HandleUpdate:()=>dispatch({type:'Update'})
    }
} */

export default connect(mapStateToProps,actionscreators)(Test);