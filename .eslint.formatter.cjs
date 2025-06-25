module.exports = results => {
    const byRuleId = results.reduce(
        (map, current) => {
            current.messages.forEach(({ ruleId, line, column, severity, fix }) => {
                const key = `${ruleId} severity:${severity} autofix:${!!fix}`

                if (!map[key]) {
                    map[key] = [];
                }

                const occurrence = `${current.filePath}:${line}:${column}`;
                map[key].push(occurrence);
            });
            return map;
        }, {}
    );

    return Object.entries(byRuleId)
        .map(([ruleId, occurrences]) => `${ruleId} (total: ${occurrences.length})\n\t${occurrences.join('\n\t')}`)
        .join('\n\n');
};