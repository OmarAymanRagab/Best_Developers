
export default async function fetchDevelopers<Array>(language: string, duration: string): Promise<Array> {
    return await fetch('https://github-trending-api.de.a9sapp.eu/developers?language=' + language + '&since=' + duration)
        .then(async response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return await response.json()
        })

}


