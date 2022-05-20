import React, { useState, useCallback, useEffect } from "react";
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import Input from '@mui/material/Input';
import {
    languages,
    spokenLanguages,
} from '@huchenme/github-trending';
import fetchDevelopers from '../services/developers';
import DeveloperCard from './Card';


export default interface SearchBarProps {
    value: string;
}

interface LanguageProps {
    urlParam: string;
    name: string
}

interface RepoProps {
    name: string;
    description: string;

}

interface DeveloperProps {
    name: string;
    username: string;
    url: string;
    repo: RepoProps;
    avatar: string;
}

export default function SearchBar() {
    const [language, setLanguage] = useState<string>("");
    const [duration, setDuration] = useState<string>("daily");
    const [loading, setLoading] = useState<Boolean>();
    const [developers, setDevelopers] = useState<Array<object>>();
    let sinceArray: Array<string> = ['daily', 'weekly', 'monthly'];
    const handleLanguageChange = useCallback((event: any) => {
        setLanguage(event.target.value);
    }, []);

    const handleDurationChange = useCallback((event: any) => {
        setDuration(event.target.value);
    }, []);

    const getInitials = ((nameString: string) => {
        const fullName: string[] = nameString.split(' ');
        const initials = fullName ? fullName.shift().charAt(0) : "";
        return initials.toUpperCase();
    });

    useEffect(() => {
        language != "" ? fetchDevelopers<{ data: Array<object> }>(language, duration)
            .then((data) => {
                setLoading(true)
                setDevelopers(data)
                setLoading(false)
            })
            .catch(error => {
                /* show error message */
                console.log(error)
            }) : ""
    }, [language, duration]);



    const handleSearch = useCallback(() => {
        fetchDevelopers<{ data: Array<object> }>(language, duration)
            .then((data) => {
                setDevelopers(data)
            })
            .catch(error => {
                /* show error message */
                console.log(error)
            })
    }, [language, developers, duration]);
    return (
        <>
            <div className={styles.searchBar}>
                <FormControl >
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                        Language
                    </InputLabel>
                    <NativeSelect
                        value={language}
                        onChange={handleLanguageChange}
                        input={<Input name="language" id="age-native-label-placeholder" />}
                    >
                        {languages.map((lang: LanguageProps) => (<option key={lang.urlParam} value={lang.urlParam}>{lang.name}</option>))}
                    </NativeSelect>
                    <FormHelperText>Choose your desired Language</FormHelperText>
                </FormControl>
                <FormControl >
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                        Since
                    </InputLabel>
                    <NativeSelect
                        value={duration}
                        onChange={handleDurationChange}
                        input={<Input name="duration" id="age-native-label-placeholder" />}
                    >
                        {sinceArray.map(since => (<option key={since} >{since}</option>))}
                    </NativeSelect>
                    <FormHelperText>Choose your desired duration</FormHelperText>
                </FormControl>
                <Button onClick={handleSearch} variant="contained">Search</Button>
                <div className={styles.flexContainer}>
                    <div className={styles.developersCard}>
                        {developers && !loading ? developers.map((dev: DeveloperProps) => (<div className={styles.developer}> <DeveloperCard
                            initials={getInitials(dev.name)}
                            avatar={dev.avatar}
                            name={dev.name}
                            username={dev.username}
                            repoName={dev.repo ? dev.repo.name : ""}
                            repoDescription={dev.repo ? dev.repo.description : ""}
                            url={dev.url} /></div>)) :
                            ""}
                        <div className={styles.EmptyContainer}>
                            {developers && developers.length == 0 ? <Typography variant="h6" component="title">
                                No results found for {language} programming language....
                            </Typography> : null}
                        </div>
                        <div>
                            {loading ? <CircularProgress /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>





    );
}
