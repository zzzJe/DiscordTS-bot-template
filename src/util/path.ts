import { dirname, join } from 'node:path';

const base = dirname(__dirname);
const command = join(base, 'command');
const event = join(base, 'event');
const validation = join(base, 'validation');

const paths = {
    base,
    command,
    event,
    validation,
};

export default paths;
