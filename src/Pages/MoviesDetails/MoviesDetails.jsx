import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { getFilm } from 'Api/Api';
import {
  BtnBack,
  CastListStyled,
  Container,
  DetailContainer,
  DetailText,
  DetailTitle,
  FilmTitle,
  GenresList,
  IconBack,
  ListCastRe,
  LoaderDiv,
  MainContainer,
  Poster,
} from './MoviesDetailsStyled';

import { Loader } from 'components/Loader/Loader';
import { NotResultsText } from 'components/Reviews/ReviewsStyled';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const fromRef = useRef('/'); // початкове значення - '/'
  
  console.log(location);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log('Params:', params);
        const movieDetails = await getFilm(params.movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [params.movieId, params]);

  useEffect(() => {
    // Зберегти значення location.state.from при кожному оновленні location
    if (location.state?.from) {
      fromRef.current = location.state.from;
    }
  }, [location]);

  const handleGoBack = () => {
    navigate(fromRef.current);
  };

  if (!movie) {
    return (
      <LoaderDiv>
        {isLoading && <Loader />}
        <NotResultsText>We are loading movies</NotResultsText>
      </LoaderDiv>
    );
  }

  return (
    <>
      <MainContainer>
        {isLoading && (
          <LoaderDiv>
            <Loader />
          </LoaderDiv>
        )}
        <BtnBack type="button" onClick={handleGoBack}>
          <IconBack size="40" />
        </BtnBack>
        <Container>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <ul>
            <DetailContainer>
              <li>
                <FilmTitle>{movie.title}</FilmTitle>
              </li>
              <li>
                <DetailTitle>Overview</DetailTitle>{' '}
                <DetailText>{movie.overview}</DetailText>
              </li>
              <li>
                <DetailTitle>Genres</DetailTitle>
                <GenresList>
                  {movie.genres.map(({ id, name }) => {
                    return <DetailText key={id}>{name} /</DetailText>;
                  })}
                </GenresList>
              </li>
              <li>
                <div>
                  <CastListStyled>
                    <li>
                      <ListCastRe to={`/movies/${params.movieId}/cast`}>
                        Cast
                      </ListCastRe>
                    </li>
                    <li>
                      <ListCastRe to={`/movies/${params.movieId}/reviews`}>
                        Reviews
                      </ListCastRe>
                    </li>
                  </CastListStyled>
                </div>
              </li>
            </DetailContainer>
          </ul>
        </Container>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default MovieDetails;
