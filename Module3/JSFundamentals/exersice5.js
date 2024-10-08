function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

const getGreetingExpression = function (name) {
    return 'Hello ' + name + '!';
    }


const getGreetingArror =  (name) => {
        return 'Hello ' + name + '!';
        }


if (getGreeting("test") != getGreetingExpression("test")) { error }

if (getGreeting("test") != getGreetingArror("test")) { error }