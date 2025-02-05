export default function Page({params}: any){
    return(
        <div className="flex justify-center items-center h-screen">
            {" "}
            {params.name}
        </div>
    )

}