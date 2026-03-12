import { Button, Heading, Card, Badge, Input, Text } from "@/components/ui/index";

import { Container, Stack } from "@/components/layout";
import styles from "./page.module.scss";
import { Save, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Container as="main">
    <div className={styles.page}>
    <Heading level="h1">
      This a title of the page
    </Heading>
    <br />
    <Card>
        I'm a card
      <Badge variant="success">
        Hello
      </Badge>
      <Input
        label="Email"
        type="email"
        placeholder="example@email.com"
      />
    </Card>
    <br />
      <Text variant="small">
        This is a small text in the component
      </Text>
      <br />
      <br />
      <Stack
        direction="row"
        gap="lg"
        align="center"
        justify="between"
      >
        <Button size="sm">Primary</Button>
        <Button variant="secondary" size="md" iconLeft={<Save size={16}/>}>
          Secondary
        </Button>
        <Button variant="ghost" size="lg">
          Ghost
        </Button>
        <Button loading>
          Saving...
        </Button>
      </Stack>
      
    </div>
    </Container>
  );
}