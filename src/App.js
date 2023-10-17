import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Grid,Container, Divider,Icon,Table,Menu,Label,Segment,Button,Search,Placeholder, List} from "semantic-ui-react"

function App(){

    return (
  <div style={{margin:"10px"}}>
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>

      <Grid.Column verticalAlign='middle'>
        <Container textAlign="center">
        <Icon name="search" size="huge"/>
        <h1>Cari Dokument</h1>
        <Search icon='search' placeholder='Search Document'/>
        </Container>
      </Grid.Column>
      <Grid.Column>
      <Container textAlign="center">
        <Icon name="file pdf outline" size="huge"/>
        <h1>Tambah Dokumen Baru</h1>
        <Button content='Create Document' size='big' primary />

        </Container>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>

    <br/>
    <Grid>
      <Grid.Column width={5}>
    <Segment>
<Placeholder>
   <Placeholder.Header image>
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Header>
   <Placeholder.Paragraph>
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Paragraph>
 </Placeholder>
</Segment>

      </Grid.Column>
      <Grid.Column width={7}>
    <Segment>
<Placeholder>
   <Placeholder.Header image>
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Header>
   <Placeholder.Paragraph>
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Paragraph>
 </Placeholder>
</Segment>

      </Grid.Column>
      <Grid.Column width={3}>
        <h1>Website Terkait</h1>
      <List>
      <List.Item
      icon='linkify'
      content={<a href='http://www.Google.com'>Google</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.facebook.com'>Facebook</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Niomic</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>React</a>}
    />
  </List>
</Grid.Column>

      </Grid>

<Grid textAlign="center">
  <Grid.Column width={12}>
  <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell colSpan='3' textAlign="right">
      <Search icon='search' placeholder='Search Document' />
      </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Nama Document</Table.HeaderCell>
        {/* <Table.HeaderCell>Header</Table.HeaderCell> */}
        <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell positive>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar CSS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar React JS</Table.Cell>
        <Table.Cell>PDF</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </Grid.Column>
</Grid>
    </div>
  );
}

export default App;
