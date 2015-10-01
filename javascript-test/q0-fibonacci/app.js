// フィボナッチ数列を求める
var num = 100;
var F = [0, 1];
for (i=2; i <= num; i++) {
  F[i] = F[i-1] + F [i-2];
}
console.log(F.slice(1));


// How About This
// in js

var generateFib;

generateFib = function(list, limit) {
  list.push(list[list.length - 1] + list[list.length - 2]);
  if (list.length >= limit) {
    return console.log(list);
  } else {
    return generateFib(list, limit);
  }
};

generateFib([1, 2], 10);

// in coffee script
generateFib([1, 2], 10);
generateFib = (list, limit) ->
  list.push(list[list.length - 1] + list[list.length - 2])
  if list.length >= limit then console.log(list) else generateFib(list, limit)

generateFib([1, 2], 10)

//in ruby
def generate_fib(list, limit)
  list << list[-1] + list[-2]
  list.size >= limit ? list : generate_fib(list, limit)
end

generate_fib([1, 2], 10)
