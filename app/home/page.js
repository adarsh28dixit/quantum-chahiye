'use client';
import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Year from "../components/year"
import { BRANCHES, DRIVE_LINKS_QUANTUM, YEARS } from "../constants"

export default function HomePage() {
    const [isYear, setIsYear] = useState(true)
    const [year, setYear] = useState('')
    const [branch, setBranch] = useState('')

    useEffect(() => {
        const response = DRIVE_LINKS_QUANTUM.filter((quant) => quant.year == year && quant.branch === branch);
        if (branch) {
            const newTabUrl = `${response[0].link}`; // replace with the actual URL
            window.open(newTabUrl, '_blank');
        }
    }, [year, branch])
    

    const selectYearHandler = (year) => {
        setYear(year)
        setIsYear(false)
    }

    const goToQuantums = (branch) => {
        setBranch(branch)
    }

    return (
        <>
            <div className="sticky top-0 z-50"><Navbar /></div>
            <div className="text-4xl text-center">Quantum series AKTU PDF free download</div>
            <div className="text-2xl text-center text-[#F4B400] pt-2 font-medium">Quantum chahiye</div>
            <div className="text-xl text-center p-4">Here you can download quantum series of all branch form 1st year to final year of engineering.</div>
            {
                isYear  && <div className="flex flex-col gap-6 items-center">
                    <div className="text-2xl text-[#DB4437]">Select you year!</div>
                    {
                        YEARS.map((yearObj, index) => (
                            <div key={index} className="">
                                <Year  onClick={() => selectYearHandler(yearObj.year)} src={yearObj.image} />
                            </div>
                        ))
                    }
                </div>
            }


            {
                !isYear  && <div className="flex flex-col gap-6 items-center">
                    <div className="text-2xl text-[#DB4437]">Select you branch!</div>
                    <div className="text-xl font-bold" onClick={() => setIsYear(true)}>{"<-"}Select year</div>
                    {       
                        BRANCHES.map((branchObj, index) => (
                            <div key={index}><Year  onClick={() => goToQuantums(branchObj.branch)} src={branchObj.image} /></div>
                        ))
                    }
                </div>
            }
            

        </>
    )
}
