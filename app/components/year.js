
export default function Year({ onClick, src }) {
    return (

        <div className="container">
            <div className={`card  text-center  `}
                onClick={onClick}
            >
                <img src={src} width={200} />
            </div>
        </div>
    )
}
