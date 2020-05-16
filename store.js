import {createStore,applyMiddleware} from "redux";
import update from 'react-addons-update';
import thunk from "redux-thunk";
import axios_o from 'axios'
const reducer=(state,action)=>{

    switch (action.type) {

        case 'Load':
            return{
            data: action.data,
            id_val:'',
            name_val:'',
            operation_type:'Add'

        }

        case 'Update':
            let id=state.id_val;
            let new_name=state.name_val;

            var data1=state.data;
            var index=data1.findIndex(function(c){
                return c.id==id
            });



            var updatedrecord=update(data1[index],{name:{$set:new_name}});

            var newdata=update(data1,{
                $splice:[[index,1,updatedrecord]]
            });
           // console.log(newdata);

            return {
                data:newdata,
                operation_type:'Add',
                id_val:'',
                name_val:''

            }


        case 'Edit':return {
            ...state,
            id_val:action.item.id,
            name_val:action.item.name,
            operation_type:'Edit'
        }


        case 'Delete':



            return {
            ...state,
            data:state.data.filter(p=>p.id!==action.id)



            }
        case 'Store_ID_VAL':{
            return{
                ...state,
                id_val:action.id_value,


            }
        }
        case 'Store_Name_VAL':{
            return{
                ...state,
                name_val:action.name_value,


            }
        }

        case 'Add':{
            return {
                data:state.data.concat([{id:state.id_val,name:state.name_val}]),
                id_val:'',
                name_val:'',
                operation_type:'Add',
            }
        }
        case 'Cancel':{
            return {
                ...state,
                operation_type:'Add',
                id_val:'',
                name_val:''
            }
        }


        default : return state;
    }

}

const initialState={

    data:[],
    id_val:'',
    name_val:'',
    operation_type:'Add'

}



export default createStore(reducer,initialState,applyMiddleware(thunk));
