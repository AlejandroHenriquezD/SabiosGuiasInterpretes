import Image from "./Image";

export default function Images(){
    const images = [
        {
            name:"https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Aguimes_03.jpg",
        },
        {
            name:"https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Aguimes_02.jpg",
        },
        {
            name:"https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Aguimes_01.jpg",
        }
    ];
    return(
        <>
        {
            images.map((item) => 
            <Image name={item.name} />)
        }
        </>
    );
}