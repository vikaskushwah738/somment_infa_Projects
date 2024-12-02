import Link from "next/link";


export default function SideBar() {
    const links = [
        {
            name: "Network survey vehicle (NSV)",
            url: "/services/network-survey-vehicle"
        },
        {
            name: "Falling Weight Deflectometer (FWD)",
            url: "/services/falling-weight-deflectometer",
        },
        {
            name:"BBD Survey", 
            url:"/services/bbd-survey",
        },
        {
            name: "Retro-reflectivity Survey",
            url: "/services/retro-reflectivity-survey",
        },
        {
            name: "Ground Penetrating Radar (GPR)",
            url: "/services/ground-penetrating-radar",
        },
        {
            name:"Traffic Surveys", 
            url:"/services/traffic-survey"
        },
        {
            name: "Automatic Traffic Counter & Classifier (ATCC)",
            url: "/services/automatic-traffic-counter-and-classifier",
        },
        
    ];

    const link = [
        {
            name: 'Technical Due Diligence',
            link: '/services/technical-due-diligence',

        },
        {
            name: 'Detailed Engineering / DPR (Detailed Project Report)',
            link: '/services/detailed-engineering-and-dpr',
        },
        {
            name: 'O&M Assessment (Operation and Maintenance Assessment)',
            link: '/services/o-and-m-assessment',

        },
        {
            name: 'Road Safety Audit and Action Plans',
            link: '/services/road-safety-audit-and-action-plans',

        },
        {
            name: 'Proof Checking',
            link: '/services/proof-checking',

        },
        {
            name: 'Project Management Consultancy (PMC)',
            link: '/services/project-management-consultancy',

        },
        {
            name:"Material Testing Laboratory",
            link: "/services/material-testing-laboratory"
        }
    ]
    return (
        <aside className="lg:w-[30%] pt-20 lg:h-[900px] h-auto w-full border-r bg-blue-50 lg:px-3 md:px-10 px-5 pb-6">
            <h2 className="txet-4xl font-medium pt-5 pl-1">1. Highway Surveys</h2>
            <ul className="flex flex-col space-y-2 w-full pt-3 pl-4">

                {links.map((item) => {
                    return <li key={item.name}>
                        <Link
                            href={item.url}
                            className="text-base hover:underline">
                            {item.name}
                        </Link>
                    </li>
                })}

            </ul>

            <h2 className="txet-4xl font-medium pt-10 pl-1">2. Bundle of services</h2>
            <ul className="flex flex-col space-y-2 w-full pt-3 pl-4">

                {link.map((item) => {
                    return <li key={item.name}>
                        <Link
                            href={item.link}
                            className="text-base hover:underline">
                            {item.name}
                        </Link>
                    </li>
                })}

            </ul>
        </aside>
    )
}