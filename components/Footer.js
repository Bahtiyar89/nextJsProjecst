import styles from "../styles/Footer.module.css";
import {
  Container,
  Grid,
  Image,
  List,
  Menu,
  Button,
  Icon,
} from "semantic-ui-react";

function Footer() {
  return (
    <Container>
      <div>
        <div
          style={{
            float: "left",
            width: "20%",
            height: "280px",
          }}
        >
          <Image width="97px" height="45px" src="/static/logo.png" />
        </div>
        <div
          style={{
            float: "left",
            width: "15%",
            height: "280px",
            textAlign: "left",
          }}
        >
          <List link>
            <List.Item active>О компании</List.Item>
            <List.Item as="a">Миссия</List.Item>
            <List.Item as="a">Политика</List.Item>
            <List.Item as="a">Команда</List.Item>
            <List.Item as="a">Контакты</List.Item>
          </List>
        </div>

        <div
          style={{
            float: "left",
            width: "20%",
            height: "280px",
            textAlign: "left",
          }}
        >
          <List link>
            <List.Item active>Услуги</List.Item>
            <List.Item as="a">Разроботка мобильных приложений</List.Item>
            <List.Item as="a">Разроботка сайтов</List.Item>
            <List.Item as="a">Интеграция систем</List.Item>
            <List.Item as="a">Разроботка сложных систем</List.Item>
            <List.Item as="a">Медиямаркетинг</List.Item>
            <List.Item as="a">Создания бренда</List.Item>
            <List.Item as="a">Умный дом</List.Item>
            <List.Item as="a">Инженерные техники в IT</List.Item>
            <List.Item as="a">NFT</List.Item>
          </List>
        </div>
        <div
          style={{
            float: "left",
            width: "20%",
            height: "280px",
            textAlign: "left",
          }}
        >
          <List link>
            <List.Item active>Проекты</List.Item>
          </List>
          <List link>
            <List.Item active>Вакансии</List.Item>
          </List>
          <List link>
            <List.Item active>Блог</List.Item>
          </List>
          <List link>
            <List.Item as="a">Адрес</List.Item>
            <List.Item as="a">телефон</List.Item>
            <List.Item as="a">почта</List.Item>
          </List>
          <List>
            <List.Item>
              <Button attached="left">
                {" "}
                <Icon name="call" />
              </Button>
              <Button attached="right">
                {" "}
                <Icon name="telegram plane" />
              </Button>
            </List.Item>
          </List>
          <List>
            <List.Item>
              <List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                />
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
              </List.Content>
            </List.Item>
          </List>
        </div>

        <div
          style={{
            float: "right",
            width: "25%",
            height: "280px",
          }}
        >
          <Image width="467px" height="280px" src="/static/footer_image.jpg" />
        </div>
      </div>
      {/*}    <div
        styleName={{
          position: "absolute",
          width: "97px",
          height: "45px",
          left: "86px",
          top: "70px",
        }}
      >
        <Image src="/static/logo.png" />
      </div>
      <div
        styleName={{
          position: "absolute",
          width: "108px",
          height: "132px",
          left: "301",
          top: "70px",
        }}
      >
        O компании
      </div>
      <div
        styleName={{
          position: "absolute",
          width: "467px",
          height: "438px",
          left: "952px",
          top: "15px",
        }}
      >
        <Image src="/static/footer_image.jpg" />
      </div>
       <Grid divided="vertically">
        <Grid.Row columns={5}>
          <Grid.Column>
            <Image
              src="/static/logo.png"
              width="97px"
              height="45px"
              top="70px"
              alt="image"
            />
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Header as="a">О компании</List.Header>
                <List.Description>Миссия</List.Description>
                <List.Description>Политика</List.Description>
                <List.Description>Команда</List.Description>
                <List.Description>Контакты</List.Description>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Header as="a">Услуги</List.Header>
                <List.Description>
                  Разроботка мобильных приложений
                </List.Description>
                <List.Description>Разроботка сайтов</List.Description>
                <List.Description>Интеграция систем</List.Description>
                <List.Description>Разроботка сложных систем</List.Description>
                <List.Description>Медиямаркетинг</List.Description>
                <List.Description>Создания бренда</List.Description>
                <List.Description>Умный дом</List.Description>
                <List.Description>Умный город</List.Description>
                <List.Description>Инженерные техники в IT</List.Description>
                <List.Description>NFT</List.Description>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item as="a">Проекты</List.Item>
              <List.Item as="a">Вакансии</List.Item>
              <List.Item as="a">Блог</List.Item>
            </List>
            <List>
              <List.Item>
                <List.Header as="a">Адрес</List.Header>
                <List.Description>телефон</List.Description>
                <List.Description>Почта</List.Description>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image
              src="/static/footer_image.jpg"
              width="300px"
              height="200px"
              top="70px"
              alt="image"
            />
          </Grid.Column>
        </Grid.Row>
  </Grid>*/}
    </Container>
  );
}

export default Footer;
