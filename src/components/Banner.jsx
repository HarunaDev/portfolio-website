function Banner(prop) {
    return (
        <section className="h-[650px] px-48 bg-background flex justify-between items-center">
            <div>
                {prop.header}
                {prop.header2}
            </div>
            
            {prop.img}
        </section>
    )
}

export default Banner