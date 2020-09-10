import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videocard">
            <img
                src={`${BASE_URL}${movie.backdrop_path}` || movie.poster_path}
                alt="movie poster"
            />
            <TextTruncate
                line={3}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videocard__stats">
                <div>
                    {movie.release_date || movie.first_air_date}
                </div>
                {/*movie.media_type && `${movie.media_type} `*/}

                <div className="videocard__votecount">
                    <ThumbUpSharp />{" "}
                    <p>{movie.vote_count}</p>
                </div>
                {""}

            </p>
        </div>
    )
});

export default VideoCard;