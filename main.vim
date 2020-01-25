source lib/shuffle.vim

let s:current_kata = 0
let s:kata_pairs = []

nnoremap <silent> ZQ :<C-U>qa!<CR>
nnoremap <silent> <C-J> :<C-U>call KataNext()<CR>
nnoremap <silent> <C-K> :<C-U>call KataPrevious()<CR>
            
function! LoadKatas()
    let result = []
    let katas_dir = 'katas'
    if exists('g:vim_kata_katas_dir')
        let katas_dir = g:vim_kata_katas_dir
    endif
    let dirs = systemlist('ls '. katas_dir)
    for dir in dirs
        let ext = 'txt'
        let ext_path = katas_dir.'/'.dir.'/ext'
        if filereadable(ext_path)
            let ext = readfile(ext_path)[0]
        endif
        let in = katas_dir.'/'.dir.'/in'
        let out = katas_dir.'/'.dir.'/out'
        call add(result, {'in': in, 'out': out, 'ext': ext, 'dir': dir})
    endfor
    if !exists('g:vim_kata_shuffle') || g:vim_kata_shuffle
        call Shuffle(result)
    endif
    let s:kata_pairs = result
endfunction

function! KataNext()
    if s:current_kata >= len(s:kata_pairs) - 1
        echo 'Already at last kata'
        return
    endif
    let s:current_kata += 1
    call LoadCurrentKata()
endfunction

function! KataPrevious()
    if s:current_kata <= 0
        echo 'Already at first kata'
        return
    endif
    let s:current_kata -= 1
    call LoadCurrentKata()
endfunction

function! LoadCurrentKata()
    let diff_on = 1
    if exists('g:vim_kata_diff_on')
        let diff_on = g:vim_kata_diff_on
    endif
    let pair = CreateWorkKata(s:kata_pairs[s:current_kata])
    let item_in = pair[0]
    let item_out = pair[1]
    if diff_on
        windo diffoff
    endif
    silent only
    execute 'edit '.item_in
    " place a literal ^K somewhere in the 'in' document to specify
    " a custom cursor start location
    let line_number = search('\%x0b')
    if line_number
        " remove ^K and clear undo history
        normal dl
        let old_undolevels = &undolevels
        set undolevels=-1
        execute "normal a \<BS>\<Esc>"
        let &undolevels = old_undolevels
    endif
    let split_command = 'belowright split'
    if exists('g:vim_kata_split_command')
        let split_command = g:vim_kata_split_command
    endif
    execute split_command.' '.item_out
    setlocal nomodifiable
    if diff_on
        windo diffthis
    endif
    wincmd t
endfunction

function! CreateWorkKata(conf)
    let file_in_content = readfile(a:conf.in)
    let file_out_content = readfile(a:conf.out)
    let file_in = tempname() . '.' . a:conf.dir . '.in.' . a:conf.ext
    let file_out = tempname() . '.' . a:conf.dir .'.out.' . a:conf.ext
    call writefile(file_in_content, file_in)
    call writefile(file_out_content, file_out)
    return [file_in, file_out]
endfunction

call LoadKatas()
