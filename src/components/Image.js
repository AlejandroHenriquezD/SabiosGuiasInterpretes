import "./Image.css"


export default function Image(props) {

    return (
        <>
            <div class="row">
                <img classname="image-source" src={props.name} alt="SGI" />
            </div>
            
        </>
    );
}