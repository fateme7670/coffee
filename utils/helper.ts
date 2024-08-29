
// const swal=require('sweetalert')

import swal from "sweetalert"

export const showSwal=(title:string,icon:string,buttons:(string | boolean)[] | undefined)=>{
    swal({
        title,
        icon,
        buttons
    })

}