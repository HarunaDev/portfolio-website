function ServiceCard(prop) {
    return (
        <div className="bg-background text-light p-16 rounded">
            <h1 className="font-bold text-3xl w-[170px] text-center">{prop.text}</h1>
        </div>
    )
}

export default ServiceCard