import { Stack, Text, Anchor, Title } from "@mantine/core";

export type Source = {
  title: string;
  url?: string;
};

export function SourcesList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;

  return (
    <Stack gap="xs">
      <Title order={5}>Sources</Title>
      {sources.map((source, index) =>
        source.url ? (
          <Anchor
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            {source.title}
          </Anchor>
        ) : (
          <Text key={index} size="sm">
            {source.title}
          </Text>
        )
      )}
    </Stack>
  );
}
