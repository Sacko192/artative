import { NextResponse } from "next/server";

const arts = [
    {
        id: 1,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 2,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 3,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 4,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 5,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 6,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 7,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
    {
        id: 8,
        title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
        img: "1.jpg",
        description: "test test",
        price: 245
    },
]

export const GET = async (request: Request, context: any) => {
    const { params } = context;
    return NextResponse.json({
        art: arts.find((x: any) => x.id === params.id)
    })
}