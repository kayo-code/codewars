function solve(eq){
  return eq.split(/([*,+,/,-]+)/).reverse().join('')
}

solve("100*b/y")
