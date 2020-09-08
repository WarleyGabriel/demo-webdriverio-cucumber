import { exec, ExecException } from 'child_process';

type Step = {
    matches: {
        line: number;
        text: string;
        uri: string;
    }[];
    code: string;
    line: number;
    pattern: string;
    patternType: string;
    uri: string;
};

const command =
    'npx cucumber-js --dry-run --require "./dist/src/test/e2e/steps/*.js" --format usage-json ./dist/src/test/e2e/features';

const commandOptions = {
    maxBuffer: 5 * 1024 * 1024,
};

exec(command, commandOptions, processCommandOutput);

function processCommandOutput(_err: ExecException | null, stdout: string) {
    const steps = JSON.parse(stdout);
    const unusedSteps = getUnusedSteps(steps);
    printUnusedStepInfo(unusedSteps);
    setProcessExitCode(unusedSteps.length);
}

function getUnusedSteps(steps: Step[]) {
    return steps.filter((step) => !step.matches.length);
}

function printUnusedStepInfo(unusedSteps: Step[]) {
    unusedSteps.forEach((step) => {
        console.log('Unused step pattern: ', step.pattern);
        console.log('Location: ', step.uri);
        console.log();
    });
}

function setProcessExitCode(code: number) {
    process.exitCode = code;
}
