const Initial =new Array(4).fill('gray');

const  Row=(props)=>{


return (

<div>
{

Initial.map((color ,index) =>(
<span key={color+index} 
className='cell round'
style={{backgroundColor :props.value[index] || color}}
/>
))
}
</div>

)

}
export default Row;