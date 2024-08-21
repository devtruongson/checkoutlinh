'use server';

export async function getListDataClass() {
    // Fetch data from API or database
    const data = await fetch('https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16').then(
        (response) => response.json(),
    );

    return data;
}
