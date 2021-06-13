const leads = [{
        '_id': 1,
        'company': 'Kamal',
        'contact_name': 'kamal',
        'email': 'abc@gmail.com',
        'phone': '1646',
        'designation': 'Managing Director',
        'created_at': '2017-01-09',
        'status': 'Active',
    },
    {
        '_id': 2,
        'company': 'KaSaputramal',
        'contact_name': 'Irwansyah Saputra',
        'email': 'aputra@mail.com',
        'phone': '1646',
        'designation': 'Managing Director',
        'created_at': '2017-01-09',
        'status': 'Inactive',
    },
    {
        '_id': 3,
        'company': 'Saputra',
        'contact_name': 'Irwansyah Saputra',
        'email': 'aputra@mail.com',
        'phone': '1646',
        'designation': 'Managing Director',
        'created_at': '2017-01-09',
        'status': 'Active',
    },
];

export function getLeads() {
    return leads;
}