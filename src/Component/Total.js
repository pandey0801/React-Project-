const Total = ({ formData })=>
{
    console.log(formData)

    let total = formData.length;

    // for (let i = 0; i < props.length; i++) {
        
    //     total += i;
    // }

return(
<div>
<p>Total Passwords :  {total} </p>
</div>
);
}
export default Total;