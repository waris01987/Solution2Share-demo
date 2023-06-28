export const dummyData: any = [
    {
        id: '1',
        key: "MenuItem1",
        content: "MenuItem1",
        menu: {
            on: "hover",
            items: [
                {
                    id: '1.1',
                    key: "subMenuItem1",
                    content: "Sub Menu Item 1",
                    menu: {
                        items: [
                            {
                                id: '1.1.1',
                                key: "sub1.1",
                                content: "My career & benefits"
                            },
                            {
                                id: '1.1.2',
                                key: "sub1.2",
                                content: "Travel & Expense"
                            }
                        ],
                    } 
                },
                {
                    id: '1.2',
                    key: "subMenuItem2",
                    content: "Sub Menu Item 2",
                    menu: {
                        items: [
                            {
                                id: '1.2.1',
                                key: "sub2.1",
                                content: "Sub sub child 1",
                                menu: {
                                    items: [
                                        {
                                            id: '1.2.1.1',
                                            key: "sub2.1.1",
                                            content: "sub sub sub child 2"
                                        }
                                    ]
                                } 
                            }
                        ]
                    } 
                },
                {
                    id: '1.3',
                    key: "subMenuItem3",
                    content: "Sub Menu Item 3"
                },
            ]
        } 
    },
    {
        id: 2,
        key: "menuItem2",
        content: "MenuItem2",
        menu: {
            items:[
                {
                    key: "subMenu1.1",
                    content: "Sub sub Menu Item 1",
                    menu: {
                        items: [
                            {
                                key: "sub1.1.1",
                                content: "My career & benefits"
                            },
                            {
                                key: "sub1.1.2",
                                content: "Travel & Expense"
                            }
                        ]
                    } 
                },
                {
                    key: "sub1.2.1",
                    content: "Sub Menu Item 2"
                },
            ]
        }
    },
    {
        id: 3,
        key: "menuItem3",
        content: "MenuItem3",
        menu: {
            items: [
                {
                    key: "submenuItem3",      
                    content: "Sub Menu Item 1",
                    menu: {
                        items:[
                            {
                                key: "submenuItem3.2",
                                content: "My career & benefits"
                            },
                            {
                                key: "submenuItem3.3",
                                content: "Travel & Expense"
                            }
                        ]
                    } 
                },
                {
                    key: "submenuItem3.3.1",
                    content: "Sub Menu Item 2"
                },
                {
                    key: "submenuItem3.3.2",
                    content: "Sub Menu Item 3"
                },
                {
                    key: "submenuItem3.3.3",
                    content: "Sub Menu Item 3"
                },
            ]
        } 
    }
]