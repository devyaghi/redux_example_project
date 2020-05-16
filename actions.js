import axios_o from 'axios'


export function LoadData(data){

    return(dispatch)=>{
        dispatch({type:'Load',data:data})
    }
}


export function HandleEdit(item){
    return(dispatch)=>{
        dispatch({type:'Edit',item:item})
    }
}

export function HandleDelete(id) {
        return(dispatch)=>{
            axios_o.post("/assigments/delete",{id:id}).then(
                response=>{
                    dispatch({type: 'Delete', id: id})
                }
            );


        }
}

export function HandleIDVal(id_value) {
    return(dispatch)=>{
        dispatch({type:'Store_ID_VAL',id_value:id_value})
    }
}


export function HandleNameVal(name_value) {
    return(dispatch)=>{
        dispatch({type:'Store_Name_VAL',name_value:name_value})
    }
}


export function HandleAdd(id,name) {
    return(dispatch)=>{
        axios_o.post("/assigments/add",{id:id,name:name}).then(response=>{
            console.log(response);
            dispatch({type:'Add'})
        });

    }
}

export function HandelCancel() {
    return(dispatch)=>{
        dispatch({type:'Cancel'})
    }
}



export function HandleUpdate(id,name) {
    return(dispatch)=>{
        axios_o.post("/assigments/update",{id:id,name:name}).then(response=>{
            console.log(response);
            dispatch({type:'Update'})
        })

    }
}