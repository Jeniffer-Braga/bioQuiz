import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router'; 
import { useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>BioQuiz</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste seus conhecimentos sobre biologia e divirta-se criando o seu AluraQuiz!</p>
            <form onSubmit= {function(infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            > 
              <Input
                //Mudança de estado(state) do componente
                name="nomeDoUsuario" 
                onChange={ (infosDoEvento) => { setName(infosDoEvento.target.value); }} 
                placeholder="Diz aí o seu nome pra jogar :)"
                value={name} 
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Pronto(a) ${name}?`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
          </Widget.Content> 
        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Jeniffer-Braga/bioQuiz" />
    </QuizBackground>
  );
} 
